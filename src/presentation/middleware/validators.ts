import { body } from "express-validator";

export const GetTreasureModelValidator = [
    body('latitude').notEmpty().withMessage('latitude is required'), 
    body('longitude').notEmpty().withMessage('latitude is required'),
    body('distance').notEmpty().custom(value => {
        if (value !== 1 && value !== 10) {

            throw new Error(`Distance must be 1 or 10  ${value}`);
        }
        return true;
    }), 
    body('priceValue').custom(value => {
        console.log(value)
        if (value === undefined || value === '') {
            return true;
        }else if(value !== 10 || value > 30){
            throw new Error('Price value must be the range of 10 and 30');
        }
        return true;
    })
];