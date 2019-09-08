**<center><span style="font-family:Papyrus; font-size:4em; color:#013220;">**Database Queries**</span></center>**

<center><img style="width: 200px; margin-bottom: 5em;" src="./1.png"></center>
  

 **<span style="color:purple; font-size:1.4em;">Find all customers with postal code 1010</span>**

```sql
SELECT * FROM [Customers] WHERE PostalCode = 1010;
```

**<span style="color:purple; font-size:1.4em;">Find the phone number for the supplier with the id 11</span>**

```sql
SELECT Phone FROM [Suppliers] WHERE SupplierID = 11;
```

**<span style="color:purple; font-size:1.4em;">List first 10 orders ever places, descending by the order date</span>**

```sql
SELECT * FROM [Orders] ORDER BY OrderDate DESC LIMIT 10;
```

**<span style="color:purple; font-size:1.4em;">Find all customers that live in London, Madrid, or Brazil</span>**

```sql
SELECT * FROM [Customers] WHERE City IN ("London", "Madrid") OR Country = "Brazil";
```

**<span style="color:purple; font-size:1.4em;">Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"</span>**

```sql
INSERT INTO [Customers] (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ("The Shire", "Bilbo Baggins", "1 Hobbit-Hole", "Bag End", "111", "Middle Earth");
```

**<span style="color:purple; font-size:1.4em;">Update Bilbo Baggins record so that the postal code changes to "11122"</span>**

```sql
UPDATE [Customers] SET PostalCode = "11122" WHERE CustomerId = 92;
```

**<span style="color:purple; font-size:1.4em;">(Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted</span>**

```sql
SELECT COUNT(DISTINCT City) FROM [Customers];
```

**<span style="color:purple; font-size:1.4em;">(Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name</span>**

```sql
SELECT * FROM [Suppliers] WHERE length(SupplierName) > 20;
```


