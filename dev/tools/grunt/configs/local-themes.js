/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    blank: {
        area: 'frontend',
        name: 'Magento/blank',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    luma: {
        area: 'frontend',
        name: 'Magento/luma',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    // askdefault: {
    //     area: 'frontend',
    //     name: 'Sdkit/askdefault',
    //     locale: 'en_US',
    //     files: [
    //         'css/styles-m',
    //         'css/styles-l'
    //     ],
    //     dsl: 'less'
    // },
    askbase: {
        area: 'frontend',
        name: 'Sdkit/base',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    askblank: {
        area: 'frontend',
        name: 'Sdkit/blank',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    // askoc: {
    //     area: 'frontend',
    //     name: 'Sdkit/askoc',
    //     locale: 'en_US',
    //     files: [
    //         'css/styles-m',
    //         'css/styles-l'
    //     ],
    //     dsl: 'less'
    // },
    // askcolor: {
    //     area: 'frontend',
    //     name: 'Sdkit/askcolor',
    //     locale: 'en_US',
    //     files: [
    //         'css/styles-m',
    //         'css/styles-l'
    //     ],
    //     dsl: 'less'
    // },
    // askclean: {
    //     area: 'frontend',
    //     name: 'Sdkit/askclean',
    //     locale: 'en_US',
    //     files: [
    //         'css/styles-m',
    //         'css/styles-l'
    //     ],
    //     dsl: 'less'
    // },
    backend: {
        area: 'adminhtml',
        name: 'Magento/backend',
        locale: 'en_US',
        files: [
            'css/styles-old',
            'css/styles'
        ],
        dsl: 'less'
    }
};

