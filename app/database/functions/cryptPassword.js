import React, { useEffect } from 'react';
import * as Crypto from 'expo-crypto';

async function cryptPassword(password) {
        const digest = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.MD5,
          password
        );
        //console.log('Digest: ', digest);

      return digest;

}

export default cryptPassword;