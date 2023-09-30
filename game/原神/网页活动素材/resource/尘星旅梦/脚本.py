import json
import os
import requests

with open("./atlas.txt", "r", encoding="UTF-8") as f:
  atlas = f.read().split("\n")
with open("./vendors.js", "r", encoding="UTF-8") as f:
  vendors = f.read()

alist = {}

print("0")
for i in atlas:
  try:
    name = i.split(".png")[0]
    print(name)
    data = i.replace("\\n", "\n")
    if not os.path.exists(name):
      os.makedirs(name)
    
    with open("./" + name + "/0.atlas", "w+", encoding="UTF-8") as f:
      f.write(data)
    
    json_url = "https://act.mihoyo.com/act/ys/event/e20230928review/node_modules/@effect/hk4e-20230928-3year/dist/effect_mobile/spine/" + name + vendors.split("node_modules/@effect/hk4e-20230928-3year/dist/effect_mobile/spine/" + name)[1].split('"')[0]
    res = requests.get(json_url).json()
    with open("./" + name + "/0.json", "w+", encoding="UTF-8") as f:
      json.dump(res, f, indent=4, ensure_ascii=False)
    
    png_url = "https://act.mihoyo.com/act/ys/event/e20230928review/images/" + name + vendors.split("images/" + name)[1].split('"')[0]
    res = requests.get(png_url)
    with open("./" + name + "/" + name + ".png", "wb") as f:
      f.write(res.content)
    
    with open("./" + name + "/1.json", "w+", encoding="UTF-8") as f:
      json.dump({"json": json_url, "img": png_url}, f, indent=4, ensure_ascii=False)
    alist[name] = name
    print(len(alist))
  except:
    print("---------------------------------------")

with open("./list.json", "w+", encoding="UTF-8") as f:
  json.dump(alist, f, indent=4, ensure_ascii=False)