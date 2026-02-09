import fs from 'fs'
import path from 'path'

describe('projects.json', () => {
  it('contains at least one featured project with expected fields', () => {
    const p = path.join(process.cwd(), 'data', 'projects.json')
    const raw = fs.readFileSync(p, 'utf-8')
    const projects = JSON.parse(raw)
    expect(Array.isArray(projects)).toBe(true)
    const featured = projects.filter((x: any) => x.featured)
    expect(featured.length).toBeGreaterThan(0)
    const proj = featured[0]
    expect(proj).toHaveProperty('slug')
    expect(proj).toHaveProperty('title')
    expect(proj).toHaveProperty('shortDescription')
    expect(proj).toHaveProperty('techStack')
  })
})
