import zhCnPicker from './locale/zh_CN';
import moment from 'moment';

function getFormatter(type) {
  let formatter;
  if (type === 'time') {
    formatter = ('HH:mm');
  } else if (type === 'datetime') {
    formatter = ('YYYY-MM-DD HH:mm');
  } else {
    formatter = ('YYYY-MM-DD');
  }
  return formatter;
}

export function formatFn(instance, value) {
  const { format } = instance.props;
  const type = typeof format;
  if (type === 'string') {
    return value.format(type);
  }
  if (type === 'function') {
    return format(value);
  }
  return value.format(getFormatter(instance.props.mode));
}

export function getProps() {
  return {
    mode: 'datetime',
    locale: zhCnPicker,
    extra: '请选择',
    defaultDate: moment(),
    onChange() {
    },
    okText: '确定',
    dismissText: '取消',
    title: '',
  };
}
