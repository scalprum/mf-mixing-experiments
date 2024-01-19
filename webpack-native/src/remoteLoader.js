import { init } from '@module-federation/runtime';
import React from 'react';
import ReactDom from 'react-dom';
import { createFederationOptions } from 'cross-utils';

export const initRemoteEntries = async () => {
  const options = createFederationOptions({
    name: 'WebpackNativeApp',
    shareConfig: {
      react: {
        version: '18.2.0',
        package: React,
        singleton: true,
      },
      'react-dom': {
        version: '18.2.0',
        package: ReactDom,
        singleton: true,
      },
    },
    remotes: [
      {
        name: 'RspackApp',
        entry: 'http://localhost:8080/rspack-entry.js',
      },
      {
        name: 'WebpackApp',
        entry: 'http://localhost:8001/webpack-entry.js',
      },
    ],
  });
  init(options);
};