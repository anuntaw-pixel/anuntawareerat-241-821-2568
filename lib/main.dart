import 'package:flutter/material.dart';
import 'data/product_data.dart';

void main() {
  runApp(const MyCatalog());
}

class MyCatalog extends StatelessWidget {
  const MyCatalog({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Cafe Catalog",
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.brown),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("☕ Café Catalog"), centerTitle: true),
      body: OrientationBuilder(
        builder: (context, orientation) {
          int columns = orientation == Orientation.portrait ? 2 : 4;

          return GridView.builder(
            padding: const EdgeInsets.all(12),
            itemCount: products.length,
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: columns,
              crossAxisSpacing: 10,
              mainAxisSpacing: 10,
              childAspectRatio: 0.68,
            ),
            itemBuilder: (context, index) {
              final product = products[index];

              return InkWell(
                borderRadius: BorderRadius.circular(20),

                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => DetailPage(product)),
                  );
                },

                child: Card(
                  elevation: 5,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20),
                  ),

                  child: Column(
                    children: [
                      Expanded(
                        child: Hero(
                          tag: product.name,
                          child: ClipRRect(
                            borderRadius: const BorderRadius.vertical(
                              top: Radius.circular(20),
                            ),
                            child: Image.asset(
                              product.image,
                              fit: BoxFit.cover,
                              width: double.infinity,
                            ),
                          ),
                        ),
                      ),

                      const SizedBox(height: 8),

                      Text(
                        product.name,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                        ),
                      ),

                      Text(
                        "฿${product.price}",
                        style: const TextStyle(
                          color: Colors.red,
                          fontWeight: FontWeight.bold,
                        ),
                      ),

                      Padding(
                        padding: const EdgeInsets.all(8),
                        child: Text(
                          product.description,
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ],
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }
}

class DetailPage extends StatelessWidget {
  final product;

  const DetailPage(this.product, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),

      body: Padding(
        padding: const EdgeInsets.all(20),

        child: Column(
          children: [
            Hero(
              tag: product.name,
              child: Image.asset(product.image, height: 250),
            ),

            const SizedBox(height: 20),

            Text(
              product.name,
              style: const TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
            ),

            const SizedBox(height: 10),

            Text(
              "฿${product.price}",
              style: const TextStyle(fontSize: 24, color: Colors.red),
            ),

            const SizedBox(height: 20),

            Text(product.description, textAlign: TextAlign.center),

            const Spacer(),

            FilledButton.icon(
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text("${product.name} เพิ่มลงตะกร้าแล้ว")),
                );
              },

              icon: const Icon(Icons.shopping_cart),

              label: const Text("เพิ่มลงตะกร้า"),
            ),
          ],
        ),
      ),
    );
  }
}
