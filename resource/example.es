{ s 0.2 } aa

rule aa maxdepth 4 {
  { y 1 } arc
  { y -1 } arc
  { ry 15 y 2 s 0.9 rz 35 hue 10 } aa
  { ry 15 y -2 s 0.9 rz -35 hue 10 } aa
}

rule spike {
  35 * { z 0.9 ry 5 s 0.9 } grid
}

rule spike {
  35 * { z 0.9 ry -5 s 0.9 } grid
}

rule spike {
  35 * { z 0.9 ry 10 s 0.9 } grid
}

rule spike {
  35 * { z 0.9 ry -10 s 0.9 } grid
}

rule arc {
  20 * { ry 12 }
  1 * { x 10 }
  spike
}
