---
slug: "/blog/2021-04-01-building-microservicies-by-sam-newman"
date: "2021-02"
title: "Building Microservices by Sam Newman"
---

# Building Microservicies - PERSONAL NOTES
by Sam Newman O'Reilly Publication

## Preface
Microservices are an approach to distributed systems that promote the use of finely grained servicies with their own lifecycles, which collaborate together.

## 1) Microservices
Microservices are small, autonomous servicies that work together.

### Small, Focused on Doing One Thing Well
Cohesion - the drive to have related code grouped together.
How small? **Small enough and no smaller**.
The smaller the service, the more you maximize the benefits and downsides of microservice architectures.

### Autonomous
It might be deployed as an isolated service on a platform as a service (PAAS), or it might be its own operating system process. We try to avoid packing multiple services onto the same machine.
TIGHT COUPLING -> Depends on each other!

### Key Benefits

#### Technology Heterogeneity
With a system composed of multiple, collaborating services, we can decide to use different technologies inside each one. Pick the right tool for each job.
One example I liked was a social applicaiton:
- Ruby for Posts with a Document based DB (like MongoDB).
- Golang for Friends with a GraphDB.
- Java for Pictures with blob storage.

#### Resilience

#### Scaling
We can just scale those services that need scaling, allowing is to run other parts of the system on smaller, less powerful hardware.

#### Ease of Deployment
With microservices, we can make a cgange to a single service and deploy it independently of the rest of the system. Code is deployed faster. If a problem occur, it can be isolated quickly to an individual service, making fast rollback easy to achive. New functionality out to customers faster.

#### Organizational Alignment
This has to do with teams.

#### Composability
The reuse of functionality. With microservices, we allow for our functionality to be consumed in different ways for different purposes.

#### Optimizing for Replaceability
Small applications are faster to re-write.

### What about Service-Oriented Architecture?
SOA is a design approach we multiple services colaborate to proide some end set of capabilities (its somehow similar to Microservice architecture). It is an approach that aims to promote the reusability of sotware; two or more end-user applications, for example, could both use the sane services.
SOA doesn't touch all points which microservices do, like how big is to big.

## 2) The Evolutionary Architect
Architects have a joined-up technical vision. Somehow this term has been adopted in the Computer Science world. Sotware Architect.

### An Evolutionary Vision for the Architect
- Focus on helping create a FRAMEWORK in which the right systems can emerge, and continue to grow as we learn more.
- Look at the multitude of sources of information, and then attempt to optimize the layout of a city (comparison with network) to best suit the needs of the citizens (users) today, taking into account future use.

### Zones
Zones? These are our service boundaries, or perhaps coarse-grained group of services. Architects worry less about what happens inside the zone than what happens **between** zones. "Be worried about that happens between the boxes, and be liberal in what happens inside.

### A Principled Approach
"Rules are for the obedience of fools and the guidance of wise men" - maybe Doublas Bader.
Strategic Goals -> Principles -> Practices

In this chapter the author goes on and on about standards for architects to follow by monitoring, setting interfaces, thinking about safety, implementing Governance, creating templates and more points in order to stablish a framework under which development can be done. Is more about team, but it follows the ideas above.

