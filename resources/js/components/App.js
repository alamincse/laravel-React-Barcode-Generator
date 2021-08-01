import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'qrcode.react';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: JSON.parse(props.data),
            title: props.title
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 card bg-primary">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <h5>{this.state.title}</h5>
                            </div>
                        </nav>
                    </div>

                    <div className="col-md-6 offset-md-3 card">
                        <div className="card-body">
                            <ul>
                                {this.state.data.map((details, index) => (
                                    <li key={index} style={{marginBottom:'25px'}}>
                                        <p>
                                            ID: {details.id} <br />
                                            Order number: {details.order_number} <br/ >
                                            Item barcode: {details.item_barcode} <br/ >
                                            Order Item: {details.item} <br/ >
                                        </p>
                                        
                                        <QRCode value={JSON.stringify(details)} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

if (document.getElementById('app')) {
    let myApp = document.getElementById(('app')); 
    let data = myApp.getAttribute('data');
    let title = myApp.getAttribute('title');
    ReactDOM.render(<App data={data} title={title} />, document.getElementById('app'));
}