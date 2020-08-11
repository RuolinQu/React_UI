import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MenuItem from './menuItem'
import Menu from './menu'

const defaultMenu = () => (
    <>
        <Menu>
            <MenuItem>Mon</MenuItem>
            <MenuItem>Tues</MenuItem>
            <MenuItem>Wed</MenuItem>
            <MenuItem>Thur</MenuItem>
            <MenuItem>Fri</MenuItem>
            <MenuItem>Sat</MenuItem>
            <MenuItem>Sun</MenuItem>
        </Menu>
    </>
)

const verticleMenu = () => (
    <>
        <Menu mode={"vertical"}>
            <MenuItem>Mon</MenuItem>
            <MenuItem>Tues</MenuItem>
            <MenuItem>Wed</MenuItem>
            <MenuItem>Thur</MenuItem>
            <MenuItem>Fri</MenuItem>
            <MenuItem>Sat</MenuItem>
            <MenuItem>Sun</MenuItem>
        </Menu>
    </>
)

const disableMenu = () => (
    <>
        <Menu >
            <MenuItem>Mon</MenuItem>
            <MenuItem >Tues</MenuItem>
            <MenuItem>Wed</MenuItem>
            <MenuItem>Thur</MenuItem>
            <MenuItem>Fri</MenuItem>
            <MenuItem disabled>Sat</MenuItem>
            <MenuItem disabled>Sun</MenuItem>
        </Menu>
    </>
)


storiesOf('Menu Component', module)
    .add('default Menu', defaultMenu)
    .add('verticle Menu', verticleMenu)
    .add('disabled Item', disableMenu)