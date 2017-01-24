# add-limitation-middleware
Adding query string ```filter:{"limit": 100}```,  
if no filter.limit is set in the request queries

## usage
* as loopback middleware
* for use as express middleware

## option
You can change {number}[defaultLimit](default: 100) for use when requests has no filter.limit value

## hoge
default-params-middlewareとして作ろうか迷ったけど設定が面倒になりそうなのでやめた。
