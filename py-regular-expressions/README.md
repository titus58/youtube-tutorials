## RE for phone numbers
### Without capturing groups
```python
re.findall(r"\(\d{3}\)-\d{3}-\d{4}", "xxx (123)-456-7890 123-456-7890 (123)-123-123 yy")
```

### With capturing groups
```python
pattern = r"""
\(  # Open paranthesis for area code
(?P<area_code>\d{3})
\)-
(?P<number>\d{3}-\d{4})
"""
match = re.search(pattern, "xxx (123)-456-7890 123-456-7890 (123)-123-123 yy", re.VERBOSE)
match.groupdict()
```

## RE for decimal point numbers

```python
pattern = r"""
(?P<whole_number>-?(0|[1-9]\d*))
(?P<fractional>\.\d+)?
"""

re.fullmatch(pattern, "199", re.VERBOSE)
```

## RE for URLs
```python
pattern = r"""
(?P<protocol>(https?|s?ftp)\://)?
(?P<domain>\w+(\.\w+){1,3})
(?P<page>/[a-z]+(\.[a-z]+)?)?
(?P<query_params>\?[a-z]+\=[a-z]+(\&[a-z]+\=[a-z]+)*)?
"""

re.fullmatch(pattern, "sftp://www.google.co.uk/index.php?key=value&name=bob", re.VERBOSE)
```
