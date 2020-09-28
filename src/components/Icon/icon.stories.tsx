import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Icon from './icon'
import IconProps from './icon'

const sizesIcon = () => (
    <>
        <Icon
            icon="arrow-down"
            size="sm"
        />
        <Icon
            icon="arrow-down"
            size="lg"
        />
        <Icon
            icon="arrow-down"
            size="2x"
        />
        <Icon
            icon="arrow-down"
            size="3x"
        />
        <Icon
            icon="arrow-down"
            size="4x"
        />
    </>
)

const themeIcon = () => (
    <>
        <Icon
            icon="arrow-down"
            theme="primary"
        />
        <Icon
            icon="arrow-down"
            theme="light"
        />
        <Icon
            icon="arrow-down"
            theme="dark"
        />
        <Icon
            icon="arrow-down"
            theme="danger"
        />
        <Icon
            icon="arrow-down"
            theme="warning"
        />
        <Icon
            icon="arrow-down"
            theme="success"
        />
    </>
)

storiesOf('Icon Component', module)
    .add('icons in different sizes', sizesIcon)
    .add('Icons in different themes', themeIcon)