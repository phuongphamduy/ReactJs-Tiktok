import { forwardRef } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

import images from '~/assets/images';
import style from './Image.module.scss';

function Image({ src, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    function handleError() {
        setFallback(images.noImage);
    }

    return (
        <img
            className={classNames(style.wrapper, className)}
            {...props}
            src={fallback || src}
            alt={alt}
            ref={ref}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
