const request = require('supertest');
const assert = require('assert');
require('dotenv/config');

describe("LastFM API", function() {
    it('\\get a valid track info', async () => {
        const resp = await request('https://ws.audioscrobbler.com/2.0/')
          .get(`?method=track.getInfo&track=Killshot&artist=Kant&api_key=${process.env.API_KEY}&format=json`);
        
        assert.strictEqual(resp.status, 200);
        assert.strictEqual(resp.body.track.name, 'Killshot');
        assert.strictEqual(resp.body.track.artist.name, 'Kant');
    });

    it('\\get an artist info', async () => {
      const resp = await request('https://ws.audioscrobbler.com/2.0/')
        .get(`?method=artist.getInfo&artist=Eminem&api_key=${process.env.API_KEY}&format=json`);
      
      assert.strictEqual(resp.status, 200);
      assert.strictEqual(resp.body.artist.name, 'Eminem');
      expect(resp.body.artist.bio.summary).toContain('Marshall Bruce Mathers III (born October 17, 1972)');
    });

    it('\\get similar artist', async () => {
        const resp = await request('https://ws.audioscrobbler.com/2.0/')
          .get(`?method=artist.getsimilar&artist=Veigh&api_key=${process.env.API_KEY}&format=json`);
        
        assert.strictEqual(resp.status, 200);
        const similarArtists = resp.body.similarartists.artist.map(artist => artist.name);
        expect(similarArtists).toContain('Ryu, the Runner');
    });
})
