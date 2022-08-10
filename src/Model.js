import React from "react";
import Container from "react-bootstrap/esm/Container";
import ViewGL from './ViewGL';


class Model extends React.Component
{
    constructor(props)
    {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount()
    {
        // Get canvas, pass to custom class
        const canvas = this.canvasRef.current;
        this.viewGL = new ViewGL(canvas);
    }

    componentDidUpdate(prevProps, prevState) {
        // Pass updated props to 
        const newValue = this.props.whateverProperty;
        this.viewGL.updateValue(newValue);
    }

    render(){
        return (
            <Container>
                <canvas ref={this.canvasRef} />
            </Container>
        );
    }
}

export default Model;