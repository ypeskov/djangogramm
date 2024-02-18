from django import forms


class RegistrationForm(forms.Form):
    password_error_messages = {
        'min_length': 'This password is too short. It must contain at least 3 characters.',
    }
    email = forms.EmailField(label='Email', max_length=100, widget=forms.TextInput(attrs={'class': 'form-control'}), )
    password = forms.CharField(label='Password', min_length=3, max_length=100,
                               widget=forms.PasswordInput(attrs={'class': 'form-control'}),
                               error_messages=password_error_messages)
    password2 = forms.CharField(label='Repeat password', max_length=100,
                                widget=forms.PasswordInput(attrs={'class': 'form-control'}),
                                error_messages=password_error_messages)

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        password2 = cleaned_data.get("password2")

        if password and password2 and password != password2:
            self.add_error('password2', "The two password fields didn't match.")
        return cleaned_data
