import {defaults} from 'jest-config'

/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mjs', 'cjs', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/__setup__.js'],
  moduleNameMapper: {"^.+\\.(css|less|scss)$": "identity-obj-proxy"},
  testEnvironment: "jsdom"
};

export default config