import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 36 34" {...props} width="34px" height="32px">
      <image
        width="36"
        height="34"
        href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAfCAYAAACCox+xAAAEfUlEQVRYha2XTehnUxjHP8+5d0J/TRYzw9TIwqykJiMpEqXIQmKh0aRsRik2SJbyksU0XkrZEAv6mywQK0RN06TYIBZYIJKX8jZDzf93n0f3vNzzcu9PFhanc885zz3n+3yf7/Oce8U4DAjA6yBXAy6O+W/9v9mW6/wC8gO4Y2CbIJ/6ozBvI8aR0WgD5OT/dzjBn7VrfvyyIXcp/DnaRu/dttgz75fa0lrXjCXOSTVnOJSOFe7gQHdioN+5FYCsO2xd64q2Dky9ZnQojvHAFV3sx7FcvEJeGujolylcotkK7yhtT4FstJpQ731oik3PoeGBhXl3ncH1LlO4RG9Jc/ksJSvPjP3o9YCw8q2LvZvGW5GRxMpq6n27va83X6d6KRjJLBm8qcgH4Xn0PLw3eOvO+2vFmvp5iXPEed/298GrpdC0Iev8qzYJzk6Bu3uA/WFTNwExDyaFIYMJ82EPvH0I0wA7+7kWZKaHhH6o4twdMvhWYf9oN1QHUhyc3w929XoE9+tiaDJ1LtJJS+dDhmwmISbvdFonzrWiDftrMQ7vdB/2KdczjRP1xWZuoliR+w2OZOWnzSk8rrWRgZQs5QwaYLNXn+MJQFcwEMSmOZ7fK9xh8G7JzhDZLNnQCIIsxiZcUobwfUXe6rcCA39ZoWj1AKZ4/27IUwpPKPJHOiBtuipCwwSkriFaiLXJli9Abhvf6QfvuZwesJPgzo4x+8ng+ACvGvIGuL8tHqDFAZEZp/N0jEWNqb5QMBa1d1SROy06FxnxYblS4VxDvlT42pAdBhcp7hZDthtyRgRzSpGtqKkNwx1owzNMYq0YOK3IN8A7irygyEclQ/1WFKsinxjiFLnVsE3DXW6IpM10ypxSbJN3DxjyrCK9VXqRSSsD/FanbJ3C/SqEZmy7DY4OyFUsqL3MDm3qxYC8ZsjJNjw2yxiS+HcNsHesQ4Z8pwGI33SnIccU2WuNuFrv2nEEtNKFA4vxWYrcZKFdY3BeBPuzIbtGex8ag+fNgyjTq023Je9CaChsGgAbhtxnyD2K7NCmfowEJPZGRq5Q5MamwEzFjKa0t+nZ1pMiu65V5EWQPZnFVChLRklAuoNzPaxnJAEcigtOkXNKgCD3KhxWxJUMMoHJ4U26Gxm5rM799Xpo0rHyqLB/0JDH2+yowSTmE/Cgkd1DYcBCas0FmgEzVWK/dkA9iPaSpHrXGsctZU1T+2fhaBkqb9ZcX7jAkOeWMydrrhZ93r/fwv1oyJ76W4MKXH2lz8Ua2Xly/C2ZX/tu+iZpWWkr63uGXLokIG3GrU6K8SWG3KyN9+k5p/o8POlZ3ub4WD8+V2RbTX8d2xZAYi2m7MeG7Jt7vMRCCczPSSrxXyk8AvJwTi3WMJHvl3wD+/l99edkKVamT4uWkbL3YlXkUYPzDTlkRUyzB7ag+nWbzz8JlxyjmU9ZY+a/DfjMkMcMiaJL1CY65wLOmy2laB3KZFdfqsVnQKH8pw1eCczIDQYXGnJms+l2Y/x5b3UzT8s8n0E0DJ4YbQX4B6pAgpe7TAbNAAAAAElFTkSuQmCC"
      />
    </Svg>
  );
};

export default Icon;
