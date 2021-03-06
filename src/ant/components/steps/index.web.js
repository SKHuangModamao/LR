import React from 'react';
import RcSteps from 'rc-steps';
import Icon from '../icon/index.web';
export default class Steps extends React.Component {
    componentDidMount() {
        this.componentDidUpdate();
    }
    componentDidUpdate() {
        if (this.props.direction !== 'horizontal') {
            return;
        }
        // set tail's left position based on main's width for each step dynamically.
        this.stepRefs.forEach(s => {
            if (s.refs.tail) {
                s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
            }
        });
    }
    render() {
        this.stepRefs = [];
        const { children, current, status } = this.props;
        const newChildren = React.Children.map(children, (item, index) => {
            let className = item.props.className;
            if (index < children.length - 1 && children[index + 1].props.status === 'error') {
                className = className ? `${className} error-tail` : 'error-tail';
            }
            let icon = item.props.icon;
            if (!icon) {
                if (index < current) {
                    // 对应 state: finish
                    icon = 'check-circle-o';
                }
                else if (index > current) {
                    // 对应 state: wait
                    icon = 'ellipsis';
                    className = className ? `${className} ellipsis-item` : 'ellipsis-item';
                }
                if (status === 'error' && index === current || item.props.status === 'error') {
                    icon = 'cross-circle-o';
                }
            }
            icon = typeof icon === 'string' ? <Icon type={icon}/> : icon;
            return React.cloneElement(item, { icon, className, ref: c => this.stepRefs[index] = c });
        });
        return <RcSteps ref="rcSteps" {...this.props}>{newChildren}</RcSteps>;
    }
}
Steps.Step = RcSteps.Step;
Steps.defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    direction: 'vertical',
    current: 0,
};
