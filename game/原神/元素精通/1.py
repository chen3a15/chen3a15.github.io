import json

def foo(a, b, c, d, e):
  
  data = []
  with open("./元素精通.json", 'r', encoding="utf-8") as f:
    data = json.load(f)
  
  for i in range(int(a) - len(data) + 1):
    data.append([0, 0, 0, 0])
  
  if data[int(a)] != [0, 0, 0, 0]:
    print("数据已存在！")
    return
  data[int(a)] = [float(b), float(c), float(d), float(e)]
  
  with open("./元素精通.json", 'w', encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

while True:
  a = input("元素精通")
  print("元素精通可以提升元素反应带来的收益。")
  b = input("•蒸发、融化反应造成伤害时，伤害提升0%；")
  c = input("•超载、超导、感电、燃烧、碎冰、扩散、绽放、超绽放、烈绽放反应造成的伤害提升0%；")
  d = input("•超激化、蔓激化反应带来的伤害提升提高0%；")
  e = input("•结晶反应形成的晶片护盾，提供的伤害吸收量提升0%。")
  foo(a, b, c, d, e)
