"use client"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { Order } from "@/types/Order"
import { useRouter } from "next/navigation";


export default function Dashboard() {
    const router = useRouter();
    useContext(AuthContext)
    const [buys, setBuys] = useState<Order[]>([])

    useEffect(() => {
        
        const token = localStorage.getItem("token")
        
         if (!token) {
            router.replace("/home");
        return;
    }

        fetch("http://localhost:3000/users/orders", {
            method: "GET",
            headers: {
                Authorization: token
            }
        })
          .then((response) => {
        return response.json()
    })
        .then((data) => {
            setBuys(data)
        } )
    }, [router])

    const context = useContext(AuthContext)
    if (context === null) {
        return null
    }

    const { user } = context

      if (user === null) {
        return null
    }

    return (
       <main className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-purple-950 px-4 py-10 text-white sm:px-6 lg:px-10">
  <div className="mx-auto max-w-6xl space-y-10">

    {/* Encabezado */}
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
        CikoStore · Mi cuenta
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Mi Dashboard
      </h1>
      <p className="mt-2 text-gray-400">
        Administrá tu perfil y consultá tus compras.
      </p>
    </section>

    {/* Datos del usuario */}
    <section className="overflow-hidden rounded-2xl border border-purple-500/20 bg-white/[0.04] shadow-xl shadow-purple-950/20">
      <div className="border-b border-white/10 bg-purple-900/20 px-6 py-5">
        <h2 className="text-xl font-bold">Datos personales</h2>
        <p className="mt-1 text-sm text-gray-400">
          Tu información de cuenta
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-white/[0.04] p-4">
          <p className="text-sm text-gray-400">ID de usuario</p>
          <p className="mt-2 break-words font-semibold">{user.id}</p>
        </div>

        <div className="rounded-xl bg-white/[0.04] p-4">
          <p className="text-sm text-gray-400">Nombre</p>
          <p className="mt-2 break-words font-semibold">{user.name}</p>
        </div>

        <div className="rounded-xl bg-white/[0.04] p-4">
          <p className="text-sm text-gray-400">Email</p>
          <p className="mt-2 break-words font-semibold">{user.email}</p>
        </div>

        <div className="rounded-xl bg-white/[0.04] p-4">
          <p className="text-sm text-gray-400">Dirección</p>
          <p className="mt-2 break-words font-semibold">{user.address}</p>
        </div>

        <div className="rounded-xl bg-white/[0.04] p-4">
          <p className="text-sm text-gray-400">Teléfono</p>
          <p className="mt-2 break-words font-semibold">{user.phone}</p>
        </div>

        <div className="rounded-xl bg-white/[0.04] p-4">
          <p className="text-sm text-gray-400">Rol de cuenta</p>
          <p className="mt-2 font-semibold capitalize text-purple-300">
            {user.role}
          </p>
        </div>
      </div>
    </section>

    {/* Historial de compras */}
    <section>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Historial de compras</h2>
          <p className="mt-1 text-sm text-gray-400">
            Consultá tus pedidos realizados.
          </p>
        </div>

        <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300">
          {buys.length} {buys.length === 1 ? "compra" : "compras"}
        </span>
      </div>

      {buys.length === 0 && (
        <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.03] px-6 py-12 text-center">
          <p className="text-4xl">🛍️</p>
          <h3 className="mt-4 text-xl font-bold">Todavía no hay compras</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
            Cuando realices tu primera compra, vas a poder consultar acá los detalles de tu pedido.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {buys.map((buy) => (
          <div
            key={buy.id}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-950/30 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Número de pedido
                </p>
                <h3 className="mt-1 text-xl font-bold">Compra #{buy.id}</h3>
              </div>

              <span className="rounded-full bg-purple-500/15 px-3 py-1.5 text-sm font-semibold capitalize text-purple-300">
                {buy.status}
              </span>
            </div>

            <div className="mt-5">
              <h4 className="mb-3 text-sm font-semibold text-gray-300">
                Productos del pedido
              </h4>

              <ul className="space-y-2">
                {buy.products.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center gap-3 rounded-lg bg-black/30 px-4 py-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
                      ✓
                    </span>
                    <span className="break-words text-sm font-medium text-gray-200">
                      {product.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

  </div>
</main>
    )
}