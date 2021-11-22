import React,{useState} from "react";

function Detail(){
    const [current, setCurrent] = useState();
    const location = current[0];
    const history = current[1];
    
    if (location === undefined) {
        history.push("/");
    }
    if (location) {
        return (
            <div className="discription">
                <div>
                    <span>{location.state.title}</span>
                    </div>
                        <br />
                    <div>
                    <span>{location.state.summary}</span>
                </div>
            </div>
            );
    } else {
        return null;
    }
}

/*
class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if (location.state) {
            return (
                <div className="discription">
                    <div>
                        <span>{location.state.title}</span>
                    </div>
                    <br />
                    <div>
                        <span>{location.state.summary}</span>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
*/
export default Detail;