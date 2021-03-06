import React from 'react';
import splitObject from '../_util/splitObject';
import List from '../list';
const { Item } = List;
export default function handleProps(props, isIndexed) {
    let [{ renderHeader, renderFooter, renderSectionHeader, renderBodyComponent }, restProps] = splitObject(props, ['renderHeader', 'renderFooter', 'renderSectionHeader', 'renderBodyComponent']);
    const listPrefixCls = props.listPrefixCls;
    const extraProps = {
        renderHeader: null,
        renderFooter: null,
        renderSectionHeader: null,
        renderBodyComponent: renderBodyComponent || (() => <div className={`${listPrefixCls}-body`}/>),
    };
    if (renderHeader) {
        extraProps.renderHeader =
                () => <div className={`${listPrefixCls}-header`}>{renderHeader()}</div>;
    }
    if (renderFooter) {
        extraProps.renderFooter =
                () => <div className={`${listPrefixCls}-footer`}>{renderFooter()}</div>;
    }
    if (renderSectionHeader) {
        extraProps.renderSectionHeader = isIndexed ?
                (sectionData, sectionID) => (<div>
        <Item prefixCls={listPrefixCls}>{renderSectionHeader(sectionData, sectionID)}</Item>
      </div>) :
                (sectionData, sectionID) => <Item prefixCls={listPrefixCls}>{renderSectionHeader(sectionData, sectionID)}</Item>;
    }
    return { restProps, extraProps };
}
