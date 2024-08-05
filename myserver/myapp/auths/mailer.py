from django.core.mail import EmailMessage

def Mailer(mail_subject, message, recipient):
    email = EmailMessage(mail_subject, message, to=[recipient])
    email.send()