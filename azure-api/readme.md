<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://azure.microsoft.com/svghandler/azure-maps/?width=600&height=315" alt="Logo" height="80">
  </a>

  <h3 align="center">Azure GPT API Chat</h3>

  <p align="center">
    This repo uses a readme template powered by GitHub
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### IABerta :robot:

A simple AI Chat using Azure GPT API and NodeJS packages


### Built With

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To use this chatbot you need to verify your node version.
```sh
  node -v //expected output: v20.12.2 
```
If your output is different of this, reinstall or update your node

#### Windows or MAC
Visit [nodejs.org](https://https://nodejs.org/en)

#### Linux
Follow this steps to upgrade your node version:
* ```sh
  sudo update
  ```
* ```sh
  sudo upgrade
  ```
* ```sh
  sudo apt install -y curl
  ```
* ```sh
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  ```
* ```sh
  sudo apt install -y nodejs
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alvim-puc/ioasys.git
   ```
2. Enter on azure-api directory
   ```sh
   cd ioasys/azure-api/
   ```
3. Install *npm* packages
   ```sh
   npm i
   ```
4. Enter your API KEYS in `.env`
   ```env
   
   API_CREDENTIAL = 'ENTER YOUR CREDENTIAL'
   GPT_ENDPOINT = 'ENTER YOUR ENDPOINT'
   DEV_ID = 'ENTER YOUR DEVELOPER ID'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

After install all dependences and enter on the project directory, run
```sh
node main.js
```
- Ask a question to IABerta bot
- Enjoy 🤙

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Send your updates to Stage area (`git add -i`)
4. Commit your Changes (`git commit -m 'add: AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request
7. Wait for review :open_hands:

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Bernardo Alvim - [@alvim_brn](https://instagram.com/alvim_brn) - alvim103@gmail.com

Project Link: [https://github.com/alvim-puc/ioasys/azure-api](https://github.com/alvim-puc/ioasys/new/main/azure-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alvim-puc/ioasys.svg?style=for-the-badge
[contributors-url]: https://github.com/alvim-puc/ioasys/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alvim-puc/ioasys.svg?style=for-the-badge
[forks-url]: https://github.com/alvim-puc/ioasys/network/members
[stars-shield]: https://img.shields.io/github/stars/alvim-puc/ioasys.svg?style=for-the-badge
[stars-url]: https://github.com/alvim-puc/ioasys/stargazers
[issues-shield]: https://img.shields.io/github/issues/alvim-puc/ioasys.svg?style=for-the-badge
[issues-url]: https://github.com/alvim-puc/ioasys/issues
[license-shield]: https://img.shields.io/github/license/alvim-puc/ioasys.svg?style=for-the-badge
[license-url]: https://github.com/alvim-puc/ioasys/azure-api/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/bernardo-alvim
