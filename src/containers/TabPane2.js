import React, {Component} from 'react';
import ImageZoomerTab2 from '../components/ImageZoomer/ImageZoomerTab2.js';
import {connect} from 'react-redux';

class TabPane2Component extends Component {
  render() {
    if (2 === this.props.state.tabKey) {
      return (
        <div id="tabPane2">
          <ImageZoomerTab2 tabKey="tab2" src="http://res.cloudinary.com/www-dharma-treasure-org/image/upload/lijiang/001/001-005a.jpg"/>
          <div id="pbText">
            དེ་ནས་བྲམ་ཟེ་དེས་བྲམ་ཟེའི་ཁྱེའུ་དེ་ལ་འོངས་པ་ལེགས་སོ་ཞེས་བྱ་བའི་ཚིག་གིས་ཀུན་དུwfwefwefwfwe
            དེ་ནས་བྲམ་ཟེ་དེས་བྲམ་ཟེའི་ཁྱེའུ་དེ་ལ་འོངས་པ་ལེགས་སོ་ཞེས་བྱ་བའི་ཚིག་གིས་ཀུན་དུ
          </div>
        </div>
      );
    } else {
      return (
        <div id="tabPane2">
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.comparison
  };
};

const TabPane2 = connect(mapStateToProps)(TabPane2Component);

export default TabPane2;
