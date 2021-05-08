import { Component } from "react";

interface Props {

}

export default class User extends Component {
    constructor(props: Props){
        super(props);
        this.state = {
            signed: false,
        };
        //Forma antiga de criar State
    }

    componentDidMount(){
        
    }

}