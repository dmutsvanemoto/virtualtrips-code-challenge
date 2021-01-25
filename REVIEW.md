## Review Notes

- Spent way more that 2 hours.
- First time using SQLLite. Spent a lot of time trying to get a database setup.
- Yarn did not behave when installing sqlite3 (Windows + WSL may have confused it.) NPM had no problems
- Had to fix tsv file as admin_code3 and 4 were to `\t` seperated.
- generate a sqlite database and imported tsv file into geonames table
- Did not use a methodical approach to solving this such as TDD. 
- Items to be listed in a readable format (some design required). Completely skipped the use of basic HTML tables/datatables
- Learnt how to use React Testing Libary. (currently use enzyme).
- Did not add try/catch for fetching locations. COuld have easily been covered if TDD was used.
- Should have added swagger docs to document how to interact with the API.
- Skipped over security review of sql input. I hope sqlite3 sanitizes against sql injection when using variables.
- didn't get a chance to utilise github actions for cicd.

Overall had a lot of fun with this one. 
Got to learn some new stuff:
    - using sqlite with nodejs
    - react testing library
    - areas to improve my approach to meeting requirements. (KISS aka keep it simple stupid)

