import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import Menu from './menu'

const defaultMenu = () => (
    <>
        <Menu>
            <SubMenu title="Frontend">
                <MenuItem>HTML</MenuItem>
                <MenuItem>CSS</MenuItem>
                <MenuItem>JavaScript</MenuItem>
                <MenuItem>React</MenuItem>
                <MenuItem>Angular</MenuItem>
                <MenuItem>Vue</MenuItem>
            </SubMenu>
            <SubMenu title="Backend">
                <MenuItem>Node</MenuItem>
                <MenuItem>Flask</MenuItem>
                <MenuItem>Django</MenuItem>
            </SubMenu>
        </Menu>
    </>
)

const verticleMenu = () => (
    <>
        <Menu mode={"vertical"}>
            <SubMenu title="Frontend">
                <MenuItem>HTML</MenuItem>
                <MenuItem>CSS</MenuItem>
                <MenuItem>JavaScript</MenuItem>
                <MenuItem>React</MenuItem>
                <MenuItem>Angular</MenuItem>
                <MenuItem>Vue</MenuItem>
            </SubMenu>
            <SubMenu title="Backend">
                <MenuItem>Node</MenuItem>
                <MenuItem>Flask</MenuItem>
                <MenuItem>Django</MenuItem>
            </SubMenu>
        </Menu>
    </>
)

const disableMenu = () => (
    <>
        <Menu >
            <SubMenu title="Frontend">
                <MenuItem>HTML</MenuItem>
                <MenuItem>CSS</MenuItem>
                <MenuItem disabled>JavaScript</MenuItem>
                <MenuItem disabled>React</MenuItem>
                <MenuItem>Angular</MenuItem>
                <MenuItem>Vue</MenuItem>
            </SubMenu>
            <SubMenu title="Backend">
                <MenuItem>Node</MenuItem>
                <MenuItem disabled> Flask</MenuItem>
                <MenuItem>Django</MenuItem>
            </SubMenu>
        </Menu>
    </>
)


storiesOf('SubMenu Component', module)
    .add('default SubMenu', defaultMenu)
    .add('verticle SubMenu', verticleMenu)
    .add('disabled Item', disableMenu)