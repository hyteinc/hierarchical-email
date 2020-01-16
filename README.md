# hierarchical-email

Library used for taking a normal email address such as user@example.com, and converting the email address into the hierarchical email address format: com.example@user

## Why?

Allows for more logical sorting/ordering of email addresses based on domain. 

###DynamoDB
DynamoDB is a NoSQL database offered by Amazon AWS

DynamoDB allows for querying Sort Keys based on 'begins with'. 
If you wanted to find all users that belong to the same domain, example.com you could use hierarchical email format to ease your searching.