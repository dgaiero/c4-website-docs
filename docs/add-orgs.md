---
id: add-orgs
title: How to Add an Organization
sidebar_label: Add organizations
---

## General Information

Organizations can be accessed directly here: [https://api.centralcoastclimate.org/dashboard/c4Backend/organization/](https://api.centralcoastclimate.org/dashboard/c4Backend/organization/)

### Organization Type

Organization type signifies if the organization is a university or
non-university.

Organization Type can be as follows:

|Organization Type|Short Name|
|---|---|
|Institution|`IO`|
|City|`CY`|
|County|`CO`|
|NGO|`NG`|
|Regional Agency|`RA`|

## Add Individual

To add an individual organization, you must include the organization name and
type. All other fields are optional.

The organization name and department must be unique together. For example,
an organization with the name of **Cal Poly** is valid, and an organization
with **Cal Poly** and a department name of **City and Regional Planning** is
also valid and can exist in the database at the same time.

However, it may be most useful to include a department name if an organization
is present in more than one department is included in the database.

## Add Bulk

For information on using the bulk uploader, please reference
[how to import](importing-data.md). Explained below is some unique information
required to import keywords.

When importing organizations, the system requests the following information:

|ID|Organization Name|Organization Type|Website|Department|
|---|---|---|---|---|
|Do not include when importing|Must include|Must include|Optional|Optional|

When importing data, omit the `ID` row.

When uploading organizations in bulk, you must use the short name as the field
value for `Organization Type`.
For reference, use the values as described in [Organization Type](#organization-type).
