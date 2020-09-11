export class ButtonClass {

    text: string;
    action: string;
    bgColor?: string;
    width?: string;
    textColor?: string;

    constructor(text: string, action: string, bgColor?: string, width?: string, textColor?: string) {
    this.text = text ? text : '';
    this.action = action ? action : '';
    this.bgColor = bgColor ? bgColor : '';
    this.width = width ? width : '';
    this.textColor = textColor ? textColor : '';


    }
}
