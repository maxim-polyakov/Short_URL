import React from 'react';
import styles from './Hero.module.css';
import { ShortUrl } from '../../http/url/Url_API';

const Hero = () => {
    const [ url, setUrl ] = React.useState('');
    let data;
    async function getShortUrl() {
        data = await ShortUrl(url)
        var input1 = document.getElementById("output");
        console.log(data)
        input1.value = data.shortLink
    }
  return (
    <div>
          <label>Url</label>
          <input type='text' id='input' placeholder='Input url'
                 onChange = {(e) => setUrl(e.target.value)} />
          <button className="button" onClick={getShortUrl}>getShortUrl</button>
          <input id='output'/>
    </div>
  );
};

export default Hero;
