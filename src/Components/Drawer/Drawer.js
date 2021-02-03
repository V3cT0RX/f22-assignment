import { Component } from 'react';
import whatsapp from './whatsapp.svg';
import menu from "./menu.webp";
import gmail from "./gmail.svg";
import skype from "./skype.svg";
import slack from "./slack.svg";
import add from "./add.svg";

class Drawer extends Component {
  render() {
    return (
      <div>
        <img src={menu} style={{ height: 53, width: 36 }} alt="Menu" />
        <img src={whatsapp} style={{ height: 53, width: 36 }} alt="whatsapp" />
        <img src={gmail} style={{ height: 53, width: 36 }} alt="gmail" />
        <img src={skype} style={{ height: 53, width: 36 }} alt="skype" />
        <img src={slack} style={{ height: 53, width: 36 }} alt="slack" />
        <img src={add} style={{ height: 53, width: 36 }} alt="add" />
      </div>
    );
  }
}

export default Drawer;