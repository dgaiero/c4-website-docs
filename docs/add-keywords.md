---
id: add-keywords
title: How to add a Keyword
sidebar_label: Add Keywords
---

## General Information

Keywords can be accessed directly here: [https://api.centralcoastclimate.org/dashboard/c4Backend/keywords/](https://api.centralcoastclimate.org/dashboard/c4Backend/keywords/)

> **NOTE** When adding keywords, you **must not** include commas in any of the
> fields. This will cause issues when importing/exporting in bulk.

### Keyword Type

Keyword Type signifies if the keyword is a topical or activity keyword.
Topical keywords may include groundwater, wildlife, etc., whereas activity
keywords may include water conservation, climate action plan, etc.

Keyword Type can be as follows:

|Keyword Type|Short Name|
|---|---|
|Activity Keyword|`AK`|
|Topical Keyword|`TK`|

### Sort Order

Keywords can be broken up into three different sort orders, high, medium, and
low. The level indicators only indicate scope, not priority or importance.
High level keywords signify a broad subject, medium indicates a slightly
narrower subject focus, and low is the most focused subject matter.

For instance, **Fruit** can be considered a high level keyword, **Apple** can
be considered a medium level keyword, and **Honeycrisp** can be considered a
low level keyword.

Keyword Order can be as follows:

|Keyword Order|Short Name|
|---|---|
|High Sort|`HS`|
|Medium Sort|`MS`|
|Low Sort|`LS`|

## Add Individual

To add an individual keyword, you must include the type, name, and sort order of
the keyword. All other fields are optional, but recommended.

## Add Bulk

For information on using the bulk uploader, please reference
[how to import](importing-data.md). Explained below is some unique information
required to import keywords.

When importing keywords, the system requests the following information:

|ID|Keyword Name|Keyword Type|Sort Order|Keyword Description|
|---|---|---|---|---|
|Do not include|Required|Required|Required|Optional|

When importing data, omit the `ID` row.

When uploading keywords in bulk, you must use the short name as the field value
for `Keyword Type` and `Sort Order`.
For reference, use the values as described in [Keyword Type](#keyword-type) and
[Sort Order](#sort-order).

A template excel file for data entry can be found [here](assets/templates/KeywordBlankTemplate.xlsx)
