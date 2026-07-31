# Reflection

## What was the most helpful aspect of this code's structure?

The way `mostReadBook` builds a lookup object (`bookCounts`) before trying to find the max was the most helpful part. Instead of comparing every entry against every other entry, it just counts each book once as it goes, then does a single pass through the counts to find the highest one. Once I saw that pattern, the rest of the function made a lot more sense, and it's a structure I can see myself reusing for other counting problems.

## What part was confusing or took longer to understand?

The two separate loops inside `mostReadBook` took me the longest to untangle. At first I expected one loop to do everything, so it wasn't obvious why the function needed to build `bookCounts` first and only then loop through it again to find `maxBook`. Once I traced through it by hand with the actual data, it clicked that the first loop is just for counting and the second loop is for comparing, and those really are two different jobs.