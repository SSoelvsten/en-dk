import React from 'react';
import RoundButton from './RoundButton';
import { GetURL } from './url_util';

const Share = () =>
  <RoundButton onClick={() => navigator.clipboard.writeText(GetURL())}
               emoji="&#10550;" emojiRotate={180}
               title='copy url to clipboard'/>

export default Share;