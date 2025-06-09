import React from 'react';
import './Hero.module.css';
import { ShortUrl } from '../../http/url/Url_API';

const Hero = () => {
    const [ url, setUrl ] = React.useState('');
    let data;
    async function getShortUrl() {
        data = await ShortUrl(url)
        document.getElementById('result').innerHTML = data.shortLink;
    }
  return (
    <div>
          <label>Url</label>
          <input type='text' id='input' placeholder='Input url'
                 onChange = {(e) => setUrl(e.target.value)} />
          <button className="button" onClick={getShortUrl}>getShortUrl</button>
          <output id="result"></output>
    </div>
  );
};

export default Hero;
