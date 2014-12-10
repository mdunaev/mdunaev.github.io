import json
import urllib
import urllib2


class Geocoder(object):
    def __init__(self, base_url="http://openstreetmap.ru/api/search?accuracy=1"):
        self.base_url = base_url + "&%s"
        self.data = []

    def geocode(self, query):
        params = {"q": query.encode("utf-8")}

        url = self.base_url % urllib.urlencode(params)
        data = urllib2.urlopen(url)
        response = data.read()

        self.data = self.parse_json(response)
        return self

    def parse_json(self, data):
        try:
            data = json.loads(data)
        except json.JSONDecodeError:
            data = []
        return data

    @property
    def first(self):
        if (len(self.data) != 0) and (self.data["find"]):
            return self.data["matches"][0]
