'''
write a program to fill in a letter template given below with name and date.'''

letter='''Dear Mr:- <|NAME|>, 
Greetings from the Technology Secret Company,software development.
I'm happy to tell you about your selection in this Company.
You are selected!
Have a nice day ahead!
Thanks and regards for you.
Mr.Shailesh Jaiswal
Date:- <|DATE|>
'''

name= input ("Enter Your Name\n")
date= input ("Enter Date\n")
letter=letter.replace("<|NAME|>",name)
letter=letter.replace("<|DATE|>",date)
print(letter)
