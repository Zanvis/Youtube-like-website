from rest_framework import serializers
from . import models

class AdministratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Administrator
        fields = ['full_name', 'username', 'email', 'password', 'roles', 'mobile_nr', 'address']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        admin = models.Administrator(
            full_name=validated_data['full_name'],
            username=validated_data['username'],
            email=validated_data['email'],
            roles=validated_data['roles'],
            mobile_nr=validated_data['mobile_nr'],
            address=validated_data['address']
        )
        admin.set_password(validated_data['password'])
        admin.save()
        return admin
    
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FilmCategory
        fields = ['id', 'title', 'description']
class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Film
        fields = ['id', 'category', 'administator', 'title', 'description', 'video', 'image']