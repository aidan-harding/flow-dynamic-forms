/**
 * @author danb@nebulaconsulting.co.uk
 * @date 08/06/2021
 */

import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class FlowButton extends LightningElement {

    @api buttonLabel;
    @api value;
    @api output;

    handleClick() {
        this.output = this.value;
        this.dispatchEvent(new FlowAttributeChangeEvent('output', this.value));
        this.dispatchEvent(new FlowNavigationNextEvent());
    }

}