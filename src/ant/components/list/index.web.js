import React from 'react';
import Item from './ListItem';
import classNames from 'classnames';
export default class List extends React.Component {
    render() {
        let { prefixCls, children, className, style, renderHeader, renderFooter } = this.props;
        const wrapCls = classNames({
            [prefixCls]: true,
            [className]: className,
        });
        return (<div className={wrapCls} style={style}>
        {renderHeader ? (<div className={`${prefixCls}-header`}>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
        </div>) : null}
        {children ? (<div className={`${prefixCls}-body`}>{children}</div>) : null}
        {renderFooter ? (<div className={`${prefixCls}-footer`}>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
        </div>) : null}
      </div>);
    }
}
List.Item = Item;
List.defaultProps = {
    prefixCls: 'am-list',
};
