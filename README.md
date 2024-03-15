Debouncing:

typing slow: 200ms 
typing fast: 30ms

Performance:

- iphone pro max = 14 letters*1000 people = 140000 api calls will be made
- with debouncing = 3 api calls *1000 = 3000 

The search suggestions are shown to give better user experience

Debouncing with 200ms 
- if the difference between two key strokes is <200ms -DECLINE API CALLS 
>200 ms - Make an API Call




cache : 
time complexity to search in array  : O(n)     [i,ip,iph,ipho]

time complexity to search in Object : o(1)   

{
    i,
    ip,
    iph,
    ipho,
    iphone,
}