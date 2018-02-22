+++
description = "The following showcases's one of speckle's ground principles: schema agnosticism."
date = "2017-12-27T13:08:41+01:00"
title = "Schemas, Standards and Speckle"
showtoc = "true"
comments = "true"
headerimg = "img/abstract@4x.png"
featureclass = "featured-post"
author = "Dimitrie Stefanescu"
twitter = "idid"
+++

# Introduction
**As there is no such thing in AEC as "one model", equally there is no "one standard"**: Speckle delivers your own data in your own way to other design stakeholders in a managed & curated way.

How? Speckle allows for objects of arbitrary classes to be sent in between clients. This happens with the help of the recently introduced `SpeckleAbstract` type and some extra functionalities embedded in the Speckle Core Converter class that allow for serialisation and deserialisation of standard .NET classes.

# Encoding a simple .NET class

Take this example class of rather normal POCO:
{{< highlight c "" >}}
public class Beam {
  public int weight { get; set; } = 42;
  public PolyCurve section;
  private string secretId;
  public Beam() { } 
}

// You can now do this:
var mySpeckleBeam = SpeckleCore.Converter.ToAbstract( new Beam() ); 

// Which results in:
{
  "type": "Abstract",
  "_type": "Beam",
  "_assembly": "AssemblyName, ...",
  "properties": {
    "weight": 42,
    "section": {
      "type": "PolyCurve",
      //...
    }
  }
}
{{</highlight>}}

# Decoding a simple .NET class 

On the receiving end, there are two possibilities. **If the context in which the object is received has access to the assembly that this class originates from**, the object will get serialized to its native type. 

**If there is no original assembly present**, the object will remain as a transparent `SpeckleAbstract` object from which you can extract properties and so and so forth.

You can even mix and mash classes of different types and from different assemblies, the same ground rules apply, so you can essentially combine any schema you may have together. Furthermore, object references are supported, so essentially a SpeckleAbstract is its own little database.

# Conclusions: Schema Agnosticism & The Way Forward

Existing AEC standards for data exchange are either fragmented, or too massive and complex to wield. Speckle takes a different approach: instead of enforcing a strict format, it aims to provide a framework in which data can be articulated meaningfully and shared transparently at various levels of abstraction.

**In short, this approach opens up the possibility for actors involved in the design process to freely create and structure their own native data models whilst maintaining fidelity and privacy, without compromising on transparency!**



