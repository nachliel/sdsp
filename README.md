# sdsp
Simple Demand-Side Platform

An HTTP server that recives a simple HTTP POST message in the form of:
```javascript
{
"id": "1f56de9f-82c3-4076-83b5-69b9cde90cd4",
"app": "Tinder",
"bidfloor": "0.2",
"cc": "GBR"
}
```
## Chance
And will return a bid to messages (20% chance response)

## Bid
The bidding is auctioned randomly. (bid-floor -> 2xbid-floor).
