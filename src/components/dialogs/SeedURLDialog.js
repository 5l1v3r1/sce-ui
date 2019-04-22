import React, {Component} from 'react';
import {Button, Classes, Dialog, Intent, TextArea, Tooltip} from "@blueprintjs/core";

class SeedURLDialog extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleClose = () => this.setState({isOpen: false});
    handleOpen = () => this.setState({isOpen: true});

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleOkay(event) {

    }


    render() {
        return (
            <Dialog
                icon="search-text"
                onClose={this.handleClose}
                title="Seed URLs"
                {...this.state}
            >
                <div className={Classes.DIALOG_BODY} style={{minHeight: "200px"}}>
                <TextArea style={{minHeight: "200px"}}
                          growVertically={true}
                          large={true}
                          intent={Intent.PRIMARY}
                          onChange={this.handleChange}
                          value={this.state.value}
                          fill={true}
                />
                </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Tooltip content="This button is hooked up to close the dialog.">
                            <Button onClick={this.handleClose}>Cancel</Button>
                        </Tooltip>
                        <Button
                            intent={Intent.PRIMARY}
                            onClick={this.handleOkay}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </Dialog>
        )
    }

}

export default SeedURLDialog