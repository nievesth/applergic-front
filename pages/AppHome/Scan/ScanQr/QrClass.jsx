import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { API } from "../../../../shared/consts/api.const";

// npm i react-qr-reader este es el bueno

class Test extends Component {
  sendBarcode = (code) =>{
    console.log(code);
        API.post('/products/', code).then(res => {
        console.log('Barcode Ok');
        // history.push('/end-register');
    });
  }
  state = {
    result: 'Sin resultado'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        // console : console.log(data),
        console : this.sendBarcode(data)
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="Scan__qr">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ maxwidth: '100%'}}
        />
        
        <p>{this.state.result}</p>
        
      </div>
    )
  }
}
export default Test;
