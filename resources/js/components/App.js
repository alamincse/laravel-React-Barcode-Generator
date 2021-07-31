import { React, Component } from 'react';
import ReactDOM from 'react-dom';

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
                            <h4 className="text-center">Welcome To React JS App!</h4>
                            <ul>
                                {this.state.data.map((details, index) => (
                                    <li key={index}>
                                        ID: {details.id}
                                        Order number: {details.order_number}
                                        Order Item: {details.item}
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