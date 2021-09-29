import {body,query} from 'express-validator'
export const commentValidator = [body('content').isLength({min : 4}).withMessage('یکم بیشتر برامون بنویس'),
body('content').isLength({max : 1000}).blacklist(['/<>']).withMessage('نظر کوتاه تری بنویس')
,
body('name').isLength({min : 4}).blacklist(['/$*<>%#~`;|']).withMessage('اسمت رو بنویس'),
body('name').isLength({max : 50}).withMessage('اسم نامعتبر') ,
    body('email').isEmail().withMessage('ایمیلی که وارد کردید نامعتبر است'),
]
export const discountCodeValidator = [query('key').trim().isLength({min : 6}).isAlphanumeric()]
export const orderValidator = []